export const titleConstruct=(string)=>{

    if(string==undefined||string==null){
        return ''
    }

    string=string.split(' ')

    var newstring = string.map((val,index)=>{
        var newcase=val.charAt(0).toUpperCase()+val.slice(1)

        return newcase
    })

    newstring=newstring.join(' ')
    
    return newstring
}