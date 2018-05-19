import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wytnij'
})
export class WytnijPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  	let ret = value;

  	if (args && args == "youtube") {

	  	if (ret && ret.length) {
	  		ret = ret.filter(item => {
	  			let ytPattern = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
	  			let match = item.match(ytPattern);
	  			return match != null;
	  		});
	  	}

  		return ret;
  	}

  	if (ret && ret.length) {
  		ret = ret.filter(item => {
  			let ytPattern = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
  			let match = item.match(ytPattern);
  			return match == null;
  		});
  	}	

    return ret;
  }

}
