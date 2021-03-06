import React, { Component } from 'react'
import Card from '../../Card/Card';
import Image from '../../Image/Image';
import classes from '../Home/Home.module.css';

class Garden extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render() {
    
        return (
            <div>
                 <Card
                 header={true}   
                 title='שרותי גינון' 
                 content='אנחנו מספקים מגוון רחב של שירותי גינון. מכיסוח דשא, גיזום עצים ועד תחזוק שוטף של הגינה.'
                 />

                <section className={classes.Row}> 
                    <Image class='' img='designGardens.jpg'/> 
                    <Card  title='אחזקה' content='שירותי תחזוקת הגינה שאנו מספקים נועדו לחסוך לך זמן ומאמץ מיותרים. טיפול שוטף של הגינה שכולל כיסוח הדשא, גירוף ופינוי העלווה, גיזום עצים, שתילה ועוד. בניית מערכת השקייה אוטמטית או תחזוק של אחת קיימת.'/>
                </section>

                 <section className={classes.Row}> 
                 <Image class='' img='Gardener.jpg'/> 
                 <Card  title='עיצוב גינות' content='יצירת גינת החלומות. בריכות נוי, מזרקות, שתילת עצים, ועיצוב עצים.'/>
                </section>
            </div>
        )
    }
}


export default Garden;
