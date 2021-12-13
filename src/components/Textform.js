import React from 'react'

export default function Textform(props) {
  const calc=()=>{
        // console.log("clicked");  
        let n1 = document.getElementById('n1').value;
    document.getElementById('result').value=n1*6.5;
   
    
  }
  const OnSetPower=()=>{
  let look=[600,3000,2400,1600,2000,70,2000,800,100,50,200,200,70,1000,1600,2000,4000];
			var i = document.calcform.Select4.selectedIndex;
			if(i===0) return;
			document.calcform.Text1.value = look[i-1];
			document.calcform.Select2.selectedIndex=0;
  }
  const OnEnergyCalc=()=>{

    var i2 = document.calcform.Select2.selectedIndex;
     var p = document.calcform.Text1.value;
    var h = document.calcform.Text2.value;
    if( p==='' || h==='' ) return;
    if( i2 === 0 ) p/=1000;
   var kwh_day   = p*h;
    var kwh_month = kwh_day*30;
    var kwh_year  = kwh_day*365;
    //  kwh_day   = (kwh_day,5);
    //  kwh_month = (kwh_month,5);
    //  kwh_year  = (kwh_year,5);
     document.calcform.Text8.value  = kwh_day;
    document.calcform.Text9.value  = kwh_month;
    document.calcform.Text10.value = kwh_year;
  }
        
  
  
  
  return (
      <>
             <div className="container">
             <div className="even">
           <h2>Electric Bill Generator </h2>
             {/* <div className="main"> */}
             <div className="main">
                      POWER CONSUMED : 
                     <input type="text" id="n1" placeholder="Enter The Units"/>
            </div>
               {/* <input type="text" id="n1" placeholder="Enter The Units"/> */}
                  {/* </div> */}
                
                  <button type="button" className="btn btn-primary btn-sm my-2 mx-3" onClick={calc}>calculate</button>
                  <input className="btn" type="text" id="result"/> Rupees 
                 </div>
        </div>
        <div className="container">
        <div className="odd">
<h2>Energy Consumption Calculator</h2>

<form name="calcform" autoComplete="off">
<table className="calc2">
<tr>
<td>Typical appliance:</td>
<td colSpan="2">
<select name="Select4" onChange={OnSetPower} autoFocus>
<option>-- select --</option>
<option>Air conditioner</option>
<option>Clothes dryer</option>
<option>Clothes iron</option>
<option>Dishwasher</option>
<option>Electric kettle</option>
<option>Fan</option>
<option>Heater</option>
<option>Microwave oven</option>
<option>Desktop computer</option>
<option>Laptop computer</option>
<option>Refrigerator</option>
<option>Stereo receiver</option>
<option>Television</option>
<option>Toaster oven</option>
<option>Vacuum cleaner</option>
<option>Washing machine</option>
<option>Water heater</option>
</select></td>
</tr>
<tr>
<td>Power consumption:</td>
<td className="math"><input name="Text1" type="number" step="any" min="0" className="intext"/></td>
<td><select name="Select2">
<option selected="selected">watts (W)</option>
<option>kilowatts (kW)</option>
</select></td>
</tr>
<tr>
<td>Hours of use per day:</td>
<td className="math"><input name="Text2" type="number" step="any" min="0" max="24" className="intext"/></td>
<td className="mathsymbol">h/day</td>
</tr>
<tr>
<td>&nbsp;</td>
<td colSpan="2"><input onClick={OnEnergyCalc} type="button" value="Calculate" className="btn"/> <input type="reset" value="Reset" className="btn"/></td>
</tr>
<tr>
<td>Energy consumed per day:</td>
<td className="math"><input name="Text8" type="text" className="outtext" readOnly/></td>
<td className="mathsymbol">kWh/day</td>
</tr>
<tr>
<td>Energy consumed per month:</td>
<td className="math"><input name="Text9" type="text" className="outtext" readOnly/></td>
<td className="mathsymbol">kWh/month</td>
</tr>
<tr>
<td>Energy consumed per year:</td>
<td className="math"><input name="Text10" type="text" className="outtext" readOnly/></td>
<td className="mathsymbol">kWh/year</td>
</tr>
</table>
</form>
<a href="https://www.freecharge.in/electricity">
<button type="button" className="btn btn-success"  style={{backgroundColor : "green", marginTop : "1rem"}}>Click Here For Payment</button>
</a>
</div>
</div>


        </>
    )
}
