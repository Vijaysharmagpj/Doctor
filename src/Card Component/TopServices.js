import React from "react";
import { Topservices } from "../Data/Topservices";

const TopServices=()=>{
    return(
        <>
        {
            <div>
                {
                    Topservices.map((data,index)=>(
                        <div key={index}>
                        <p>{data.services}</p>
                        </div>
                    ))
                }
            </div>
        }
        </>
    )
}
export default TopServices;