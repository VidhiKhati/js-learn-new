 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);

 let mycreateddate = new Date(2023, 0, 23)
 console.log(mycreateddate.toDateString());

 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(Math.floor(Date.now()/1000));