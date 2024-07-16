import LeftContainer from "./LeftContainer";

const Layout = (props:{
    children: React.ReactNode
}) => {
    return (
        <div className="flex">
            <LeftContainer />
            <div>
                <div>학교 이름 로고</div>
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Layout;