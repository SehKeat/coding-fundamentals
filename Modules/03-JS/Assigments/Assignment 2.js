function calculateAge(date) {
    // your code
    var today = new Date()
    var datearray = date.split("/")
    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2]
    var birthDate = new Date(newdate)
    var age = today.getFullYear() - birthDate.getFullYear()
    var month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    {
        age--     
    }
    console.log(age)
    return age
}

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)