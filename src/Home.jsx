import React from 'react'

const Home = () => {
    return (
        <div style={{paddingTop:"30px",paddingBottom:"30px"}}>

            <div class='container'>
                <div className='total_home'>
                    <div className='home_li'>
                        <li style={{borderBottom:"2px solid"}}>Income</li>
                        <li>Expense</li>
                        <li>Journal</li>
                    </div>
                    <div>
                        <select name="cars" id="cars" className='graphic_select'>
                            <option value="volvo">Graphic Design, Video...15%</option>
                            <option value="saab">Video Editing</option>
                            <option value="opel">Audio edit</option>
                            <option value="audi">Sound Effect</option>
                        </select>

                        <input type="text" name="txtBox"  placeholder='Search' className='serch_home'></input>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home