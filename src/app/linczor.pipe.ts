import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'linczor'
})
export class LinczorPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer){}

  transform(value: any, args?: any): any {

  	let modified = value;
  	let iframe = "";

  	//case youtube

    if (!value) return [];

  	var ytPattern = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
  	var match = value.match(ytPattern);

  	if(match != null) {

  		iframe = `
  			<iframe width="300" height="200" src="https://www.youtube.com/embed/${match[6]}" frameborder="0" allowfullscreen></iframe>
  		<br/><br/>`;
  	}


	//URLs starting with http://, https://, or ftp://
	let replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
	modified = value.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

	//URLs starting with "www." (without // before it, or it'd re-link the ones done above).
	let replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
	modified = modified.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

	//Change email addresses to mailto:: links.
	let replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
	modified = modified.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

  	modified = iframe + modified;

  	
  	//

    return this.sanitizer.bypassSecurityTrustHtml(modified);
  }

}
