import { Button } from "@mantine/core";
import Link from "next/link";
const Home = () => {
    return (
        <div className="m-0 p-0 w-[100vw] h-[100vh] main-bg relative">
            <div className="absolute top-[50%] left-[33%] text-style">
                EatBit - Pay with any wallet
            </div>

            <div className="absolute top-[60%] left-[40%]">
                <Link href="/customer" legacyBehavior>
                    <a>
                        <Button size="md" style={{ background: "#22c55e", marginRight: "2rem" }}>Customer</Button>

                    </a>
                </Link>

                <Link href="/resturant" legacyBehavior>
                    <a>
                        <Button size="md" style={{ background: "#22c55e" }}>Restaurant</Button>

                    </a>
                </Link>
            </div>


        </div>
    )
}

export default Home;