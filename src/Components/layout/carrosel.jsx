import { Carousel } from "flowbite-react";

export function Carrosel(){

    return(
        <>
            <Carousel slideInterval={2500} >
                <img src="https://i.imgur.com/qe8OUou.jpg" alt="2019"/>
                <img src="https://i.imgur.com/tXpXZWL.jpg" alt="2022"/>
                <img src="https://i.imgur.com/qe8OUoum.jpg" alt="2019" />
                {/* <img src="https://i.imgur.com/kS1VnKM.jpg" alt="2019" /> */}
                <img src="https://i.imgur.com/VRbppmG.jpg" alt="2019" />
                <img src="https://i.imgur.com/tJQS6w2.jpg" alt="2019" />
                <img src="https://i.imgur.com/kHVz1Zc.jpg" alt="2022" />
                <img src="https://i.imgur.com/cdwmL4D.jpg" alt="2022" />
                <img src="https://i.imgur.com/VMaHmhpm.jpg" alt="2019" />
                <img src="https://i.imgur.com/0B9XKdy.jpg" alt="2019" />
            </Carousel>
        </>
    )
}
