import { BannerSection } from "../../BannerSection"
import { DefaultTemplate } from "../../DefaultTemplate"
import { ProductsCategory } from "../../ProductsCategory"



export const LadingPages = () => {
    return ( 
        <>
            <DefaultTemplate>
                <BannerSection/>
                <ProductsCategory/>
            </DefaultTemplate>   
        </>
    )
}