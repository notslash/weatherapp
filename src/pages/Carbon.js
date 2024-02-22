import "./Carbon.css"
const Carbon=()=>{
    return(
        <div className="background">
            <h2 className="carbon_header">Carbon Monoxide</h2>
            <div className="grid_cotainer">
                <div className="grid_item">
                    <div className="color_level1"></div>
                    0-0.003 ppm
                </div>
                <div className="grid_item">
                <div className="color_level2"></div>
                0.009-0.01 ppm
                </div>
                <div className="grid_item">
                <div className="color_level3"></div>
                    0.025-0.035 ppm
                    </div>
                <div className="grid_item">
                <div className="color_level4"></div>
                    0.09-0.1 ppm
                </div>
                <div className="grid_item">Normal carbon levels</div>
                <div className="grid_item">You may expience dizzyness or feel nousious</div>
                <div className="grid_item">You may expience symptoms after 6-8 hours</div>
                <div className="grid_item">You may expience symptoms after 4-6 hours</div>
                <div className="grid_item">We would say you could stay in these conditions for more then 8 hours</div>
                <div className="grid_item">We recommend you do not stay in these conditions for more then 8 hours</div>
                <div className="grid_item">We recommend you do not stay in these conditions for more then 1-2 hours</div>
                <div className="grid_item">We recommend you do not stay in these conditions for more then 15 minutes</div>

            </div>
        
        </div>
    )
}

export default Carbon;