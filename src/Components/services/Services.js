import React from 'react'

function Services() {
  const services = [
    {
      title: "Regular Tax Filing",
      details:
        "We offer professional tax filing services for individuals and businesses. Our experts ensure accurate and timely filing to minimize your tax liabilities.",
        packages: [
          { duration: "3 months", price: 6000 },
          { duration: "6 months", price: 10000 },
          { duration: "1 year", price: 18000 }
        ]
    },]
  return (
    <div style={{marginTop:80}}>
      {services.map((item)=>{
       <>
        <h1>{item.title}</h1>
        <p>{item.details}</p>
        <p>{item.packages}</p>
       </>
       
      })}
    </div>
  )
}

export default Services