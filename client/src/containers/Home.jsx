import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';
import RaisedButton from 'material-ui/RaisedButton';



class Home extends React.Component {
    constructor(props){
        super(props) 
        this.state ={ 
            settings: ['Sea', 'Rainforest', 'Beach', 'Mountains', 'Urban', 'Suburban'],
            experiences: ['Indulgence', 'Wellness', 'Adventure']
        }

        this.handClickExperience = this.handClickExperience.bind(this)
        this.handleClickSetting = this.handleClickSetting.bind(this)
        this.handleMainSearch = this.handleMainSearch.bind(this)
        
    }

    componentDidMount(){
        this.props.actions.getAllHotels()
    }

    handleMainSearch(){
        this.props.actions.getMainSearchResults(this.mainSearch.value)
    }

    handleClickSetting(settingName){
        console.log('clicked', settingName)
        this.props.actions.getSettingSeach(settingName)
    }

    handClickExperience(experienceName){
        this.props.actions.getExperienceSearch(experienceName)
    }


    render() {  
        console.log('state is this', this.props.appState)
        let {settings} = this.state
        let {experiences} = this.state


        return (
            <main>
                <div className="c-home-nav">
                    <h1>The Ananta Collection</h1>
                </div>
                <div className="c-video-outer"> 
                    <div className="c-content">
                        <div className="c-content__container">
                            <h2>Your tailor-made list of niche luxury and boutique hotels</h2>
                            <div className="c-content__form">
                                <input className="c-content__form__input" type="text" id="name" placeholder="Enter Destination/Hotel" ref={mainSearch => this.mainSearch = mainSearch}/>
                            </div>
                            <div className="c-content__btn">
                                <RaisedButton onClick={this.handleMainSearch} label="Submit" style={{'width':'100px', 'fontFamily': 'PT Sans'}} />
                            </div>
                        </div>
                    </div>
                    <div className="c-video-inner">
                        <div className="c-video">
                            <iframe className="c-video__iframe" frameBorder="0" height="250%" width="100%" 
                                src="https://www.youtube.com/embed/tNr8lDKzAxg?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=tNr8lDKzAxg"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>

                <br/>
                <h3 className="c-header__setting">Explore by Setting</h3>
                <br/>

                <div>

                    <div className="c-settings">


                        {
                            settings.map((item, i) => {
                                return (
                                    <div className="c-settings__each" key={i} onClick={() => {this.handleClickSetting(item)} }>
                                        <div className="c-settings__imgWrapper">
                                            <img className={`c-settings__${item} c-settings__size`} alt=""/>
                                        </div>
                                        <div className="c-settings__header">
                                            <h5>{item}</h5>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                
                    </div>
                </div>

                <br/>
                <br/>
                <h3 className="c-header__experience">Discover by Experience</h3>
                <br/>

                <div className="c-experiences">
                    {
                        experiences.map((item, i) => {
                            return(
                                <div className="c-experiences__each" key={i} onClick={() => {this.handClickExperience(item)} }>
                                        <div className="c-experiences__imgWrapper">
                                            <img className={`c-experiences__${item} c-experiences__size`} alt=""/>
                                        </div>
                                        <div className="c-experiences__header">
                                            <h5>{item}</h5>
                                        </div>                                
                                </div>
                            )
                        })
                    }
            
                </div>

                <br/>
                <br/>
                <h3 className="c-header__experience">Featured Hotel: The Datai</h3>
                <br/>

                
            </main>
        )
    }
}

export default connect(
    state => ({
        appState: state.appReducer,
    }),
    dispatch => ({
        actions: bindActionCreators( appActions , dispatch)
    })
)(Home);


