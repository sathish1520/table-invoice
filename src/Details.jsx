import React from 'react'

const Details = () => {
    return (
        <div className='total_backdround'>
            <div class="container">
                <div className='previous_select'>
                    <h4>Previous invoices</h4>
                    <div className='details_select'>
                        <select name="cars" id="cars" className='All_select'>
                            <option value="volvo">All</option>
                            <option value="saab">Video </option>
                            <option value="opel">Audio </option>
                            <option value="audi">Sound </option>
                        </select>
                        <select name="cars" id="cars" className='filter_select'>
                            <option value="volvo">Filter by receiver</option>
                            <option value="saab">Video Editing</option>
                            <option value="opel">Audio edit</option>
                            <option value="audi">Sound Effect</option>
                        </select>
                        <select name="cars" id="cars" className='year_select'>
                            <option value="volvo">2018 y.</option>
                            <option value="saab">2017 y.</option>
                            <option value="opel">2016 y.</option>
                            <option value="audi">2015 y.</option>
                        </select>
                        <select name="cars" id="cars" className='whole_select'>
                            <option value="volvo">Whole period</option>
                            <option value="saab">Video Editing</option>
                            <option value="opel">Audio edit</option>
                            <option value="audi">Sound Effect</option>
                        </select>
                    </div>
                </div>
                <div className='card_total_details'>
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='fix_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-plus"></i></span>Fix payment</button>
                        <div className='edit_icon'>
                            <i class="fa fa-edit"></i>
                        </div>
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class='container' style={{marginTop:"40px"}}>
            <h4>Active income</h4>
            <div className='card_total_detailsactive' style={{marginTop:"40px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}>
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='fix_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-plus"></i></span>Fix payment</button>
                        <div className='edit_icon'>
                            <i class="fa fa-edit"></i>
                        </div>
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>

                <div className='card_total_detailsactive1' >
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='fix_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-plus"></i></span>Fix payment</button>
                        <div className='edit_icon'>
                            <i class="fa fa-edit"></i>
                        </div>
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>


                <div className='card_total_detailsactive' >
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='paid_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-check"></i></span>Paid: 2017-07-01</button>
                       
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>
                <div className='card_total_detailsactive1' style={{borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}} >
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='paid_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-check"></i></span>Paid: 2017-07-01</button>
                       
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class='container' style={{marginTop:"40px"}}>
            <h4>2018 y , fabruary mo.</h4>
            <div className='card_total_detailsactive' style={{marginTop:"40px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}>
                    <div>
                        <button className='pdf_bttn'>PDF<span><i class="fa fa-arrow-down"></i></span></button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h5>2018-04-07</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div>
                        <h5>UAB Microsoft</h5>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>ABIS 00001</h6>
                    </div>
                    <div  style={{textAlign:'center'}}>
                        <h5>1.380,77 €</h5>
                        <h6>After tax</h6>
                    </div>
                    <div className='paid_payment_bttn'>
                        <button className='fix_invoice_bttn'><span><i class="fa fa-check"></i></span>Paid: 2017-07-01</button>
                        
                        <div className='edit_icon'>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    )
}

export default Details