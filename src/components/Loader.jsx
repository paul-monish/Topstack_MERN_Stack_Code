import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = () => {

    return (
        <div style={{
            position: "fixed",
            width: "100%",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <div style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                paddingRight: 9,
                paddingLeft: 9,
                borderRadius: 7,
                paddingTop: 9,
                paddingBottom: 9,
            }}>

                <Circles
                    height="40"
                    width="40"
                    color="#0047AB"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    )
}

export default Loader