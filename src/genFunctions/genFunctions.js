const validURL = (data) => {
	  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	  return !!pattern.test(data);
	}
	
const primaryBadge = (data) => {
	  if(data)
		return data
	  else
		return "N/A"
	}	

const checkData = (data) => {
	  if(data)
		return data
	  else
		return "-"
	}		
	
const hasWhiteSpace = (s) => {
    return /\s/g.test(s);
  }	
  
export {hasWhiteSpace,validURL,primaryBadge,checkData}