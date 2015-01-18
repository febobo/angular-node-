app.filter('fedata' , function(){
	return function(item){
		return item.replace(/[a-zA-Z]/g , ' ').split('.')[0]
	}
}).filter('paging' , function(){
	return function( items , index , pageSize){
		if(!items) return []
		var offset = (index-1) * pageSize;
		console.log(items)
		return items.slice(offset , offset + pageSize)

	}
}).filter('size' , function(){
	return function(items){
		if(!items){
			return 0
		}else{
			return items.length || 0
		}
	}
})
