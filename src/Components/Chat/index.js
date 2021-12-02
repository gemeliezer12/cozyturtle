const index = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "70px 230px 1fr",
            height: "100vh"
        }}>
            <div style={{
                backgroundColor: "var(--bg-color-1)"
            }}></div>
            <div style={{
                backgroundColor: "var(--bg-color-3)",
                display: "grid",
                gridTemplateRows: "50px 1fr 50px",
            }}>
                <div></div>
                <div></div>
                <div style={{
                    backgroundColor: "var(--bg-color-2)"
                }}></div>
            </div>
            <div style={{
                display: "grid",
                gridTemplateRows: "50px 1fr"
            }}>
                <div style={{
                    backgroundColor: "var(--bg-color-4)"
                }}></div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 0"
                }}>
                    <div style={{
                        backgroundColor: "var(--bg-color-4)"
                    }}></div>
                    <div style={{
                        backgroundColor: "var(--bg-color-3)"
                    }}></div>
                </div>
            </div>
        </div>
    )
}

export default index
