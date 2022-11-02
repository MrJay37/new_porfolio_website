const formatToYearMonth = (date_obj) => {
    if (!date_obj){
        return 'Now'
    }
    else if (typeof(date_obj) === 'string'){
        date_obj = new Date(date_obj)
    }
    const date_string = date_obj.toDateString()
    
    return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
}

export {
    formatToYearMonth
}