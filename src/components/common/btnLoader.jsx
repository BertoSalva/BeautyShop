
function BtnLoader() {
    return (
        <>
            <style>
                {`
                    #loader-div {
                        width: 20px;
                        height: 20px;
                        border: 5px solid rgb(221, 221, 221);
                        border-top: 5px solid #f273f2;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}  
            </style>

            <div className="flex justify-center">
                <div id="loader-div"></div>
            </div>
        </>
    );
}

export default BtnLoader;