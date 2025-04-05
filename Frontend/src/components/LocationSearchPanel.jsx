import React from 'react'

const LocationSearchPanel = (props) => {

    // sample array for location

    const locations = [
        "24B, Near Kapoor's cafe,Bhopal",
        "22B, Near Malhotra's cafe,Bhopal",
        "20B, Near Singhaniya's cafe,Bhopal",
        "18B, Near Parjapati's cafe,Bhopal"
    ]

    return (
        <div>
            {/* this is just a sample data */}

            {
                locations.map(function (elem,idx) {
                    return <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanel(false)
                    }} className='cursor-pointer border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-1 items-center bg-[#eee] rounded-xl'>
                    <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                    <div>
    
                        <h3 className='font-medium overflow-hidden'>{elem}</h3>
                        {/* <h5 className='opacity-70'>A place near me</h5> */}
                    </div>
                </div>
                })
            }
            {/* <div className='cursor-pointer border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-1 items-center bg-[#eee] rounded-xl'>
                <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                <div>

                    <h3 className='font-medium'>24B, Near Kapoor's cafe,Bhopal</h3>
                    <h5 className='opacity-70'>A place near me</h5>
                </div>
            </div>
            
            <div className='cursor-pointer flex border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-3 items-center bg-[#eee] rounded-xl'>
                <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                <div>

                    <h3 className='font-medium'>24B, Near Kapoor's cafe,Bhopal</h3>
                    <h5 className='opacity-70'>A place near me</h5>
                </div>
            </div>

            <div className='cursor-pointer flex border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-3 items-center bg-[#eee] rounded-xl'>
                <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                <div>

                    <h3 className='font-medium'>24B, Near Kapoor's cafe,Bhopal</h3>
                    <h5 className='opacity-70'>A place near me</h5>
                </div>
            </div>

            <div className='cursor-pointer flex border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-3 items-center bg-[#eee] rounded-xl'>
                <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                <div>

                    <h3 className='font-medium'>24B, Near Kapoor's cafe,Bhopal</h3>
                    <h5 className='opacity-70'>A place near me</h5>
                </div>
            </div>

            <div className='cursor-pointer flex border-2 border-transparent hover:border-black flex gap-2 h-[60px] p-3 mt-3 items-center bg-[#eee] rounded-xl'>
                <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                <div>

                    <h3 className='font-medium'>24B, Near Kapoor's cafe,Bhopal</h3>
                    <h5 className='opacity-70'>A place near me</h5>
                </div>
            </div> */}

        
        </div>
    )
}

export default LocationSearchPanel