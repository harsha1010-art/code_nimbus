import ActionAreaCard from "./Cardsec";

export function Coustomcard(){
    return(
        <><div className="happytxt">
            <h1 className="maintxt">THE HAPPY COUPLE</h1>
            <p className="dicp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, <br />efficitur dolor fermentum, tincidunt metus.</p>
        </div><div className="images">

            <img src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/him2.jpg" alt="couplr" className="coupl-him"/>
            <div className="captn">
                <p className="caption-him">⁕⁕⁕ THE GROOM ⁕⁕⁕</p>
           <button className="grm">FOR HIM</button>
           
            </div>
             
           
            
            
            </div>
            <div className="her"> 
            <img src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/her2.jpg" alt="cpl" className="coupl-her" />
            <div className="captn1">
                <p className="caption-him1">⁕⁕⁕ THE Bride ⁕⁕⁕</p>
           <button className="grm1">FOR HER</button>
           
           </div>

                </div>
                <div className="discripiton">
                <p className="descrp-him">Iam Gerrard Leandro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.</p>
                <p className="descrp-her">Iam Gerrard Leandro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.</p>
                </div>

                <div className="flatimg">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" className="titimg" />
                    <p className="draft">*** AT FOXEGAN HOTEL & RESTAURANT, LOS ANGELES ***</p>
                    <h1 className="mainhdng">COUNTING DOWN</h1>
                    <p className="hrt">_____❤️_____</p><br />
                    <p className="time">0W 0D 0h 0m 0s</p>
                </div>
                <div className="hdng1">
                    <h1 className="txt">
                        THE WEDDING
                    </h1>
                    <p className="pr">Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="crdsec">
                    <div className="crds">
                        <ActionAreaCard/>
                    </div>
                </div>
                
                
                </>
    )
}