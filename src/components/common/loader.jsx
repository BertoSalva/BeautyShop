
function Loader() {
    return (
        <>
            <style>
                {`
                    #loader-div {
                        width: 100px;
                        height: 100px;
                        border: 10px solid rgb(99, 99, 99);
                        border-top: 10px solid #f273f2;
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

export default Loader;