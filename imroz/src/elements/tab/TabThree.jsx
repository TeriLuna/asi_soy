import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: 'Pantalon/Short',
        title: 'Design is a creative part'
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Vestidos',
        title: 'The service provide for designer'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-1-2.jpg',
        category: 'Pantalon/Short',
        title: 'Vestidos landing Design'
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-1-3.jpg',
        category: 'Vestidos',
        title: 'Logo Design creativity'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-2.jpg',
        category: 'Pantalon/Short',
        title: 'Laptop design is the part of design'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-2-1.jpg',
        category: 'Top',
        title: 'Vestidoslication the big show'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-2-2.jpg',
        category: 'Pantalon/Short',
        title: 'Web application create a app'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-2-3.jpg',
        category: 'Top',
        title: 'Show your mobile data.'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Top',
        title: 'Data application is a mobile data.'
    },
   
]


const TabTwo = [
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Pantalon/Short',
        title: 'Logo design is the main part for a designer'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        category: 'Pantalon/Short',
        title: 'Getting tickets to the big show'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        category: 'Pantalon/Short',
        title: 'Vestidos landign is a landing page design'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Pantalon/Short',
        title: 'Dasboard design is the main part for data management'
    },
    {
        image: '10',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-10.jpg',
        category: 'Pantalon/Short',
        title: 'T-shirt design is the popular design for digital market'
    },
    {
        image: '11',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-11.jpg',
        category: 'Pantalon/Short',
        title: 'Getting tickets to the big show'
    },
]

const TabThree = [
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-1-1.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Vestidos',
        title: 'Getting tickets to the big show'
    },
]

const TabFour = [
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
    {
        image: '10',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-10.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
    {
        image: '11',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-11.jpg',
        category: 'Top',
        title: 'Getting tickets to the big show'
    },
]

class TabStyleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, tab2, tab3, tab4, isOpen } = this.state;
        return (
            <div>
                <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab><span>Todas las coleciones</span></Tab>
                                    <Tab><span>Pantalon/Short</span></Tab>
                                    <Tab><span>Vestidos</span></Tab>
                                    <Tab><span>Top</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>

                    <TabPanel className="row row--35">
                        {TabOne.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                        prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Ya vienen cositas bonitas, no desesperes ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
            
                    <TabPanel className="row row--35">
                        {TabTwo.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabTwo[tab2].bigImage}
                                        nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                        prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab2: (tab2 + 1) % TabTwo.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab2: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabThree.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabThree[tab3].bigImage}
                                        nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                        prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab3: (tab3 + 1) % TabThree.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab3: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFour.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFour[tab4].bigImage}
                                        nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                                        prevSrc={TabFour[(tab4 + TabFour.length - 1) % TabFour.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab4: (tab4 + 1) % TabFour.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab4: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>



                </Tabs>
            </div>
        )
    }
}


export default TabStyleThree
