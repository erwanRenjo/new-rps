import React, { Component } from 'react'
import { connect } from 'react-redux'

export class gamePage extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <main class="row justify-content-xl-center mt-3">
                    <div class="col-xl-3">
                    <h1 class="player">PLAYER 1</h1>
                <div class="row row-cols-1 justify-content-xl-center">
                    <figure class="col-xl-7 figure" id="batu">
                        <input type="image" src="assets/images/moves/batu.png" class="choice-player choice-hover"
                            onClick="getChoice(1)"/>
                    </figure>
                    <figure class="col-xl-7 figure" id="kertas">
                        <input type="image" src="assets/images/moves/kertas.png" class="choice-player choice-hover"
                            onClick="getChoice(2)"/>
                    </figure>
                    <figure class="col-xl-7 figure" id="gunting">
                        <input type="image" src="assets/images/moves/gunting.png" class="choice-player choice-hover"
                            onClick="getChoice(0)"/>
                    </figure>
                </div>
            </div>
            <div class="col-xl-2 ml-3 mr-3 result">
                <div class="row justify-content-center">
                    <div class="col vs" id="vs">
                        <p>
                            VS
                        </p>
                    </div>
                    <div class="col win-player" id="win-player">
                        <p>
                            WIN
                        </p>
                    </div>
                    <div class="col win-com" id="win-com">
                        <p>
                            COM
                        </p>
                        <p>
                            WIN
                        </p>
                    </div>
                    <div class="col draw" id="draw">
                        <p>DRAW</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 com">
                <h1 class="player">
                    COM
                </h1>
                <div class="row row-cols-1 justify-content-center">
                    <figure class="col-xl-7 pt-4 figure" id="com-batu">
                        <img src="assets/images/moves/batu.png" alt="batu" class="choice-com"/>
                    </figure>
                    <figure class="col-xl-7 pt-4 figure" id="com-kertas">
                        <img src="assets/images/moves/kertas.png" alt="kertas" class="choice-com"/>
                    </figure>
                    <figure class="col-xl-7 pt-4 figure" id="com-gunting">
                        <img src="assets/images/moves/gunting.png" alt="gunting" class="choice-com"/>
                    </figure>
                </div>
            </div>
        </main>


        <section class="row mt-5 mb-5 refresh">
            <figure onclick="refreshGame()" class="col">
                <img src="assets/images/moves/refresh.png" class="refresh-btn" alt="refresh"/>
            </figure>
        </section>
    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(gamePage)
