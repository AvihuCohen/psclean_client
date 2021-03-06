import React, { Component } from "react";
import Header from "../../Header/Header";
import Card from "../../Card/Card";
import Image from "../../Image/Image";
import classes from "./Home.module.css";

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={classes.Home}>
        <Header />

          <Card
            header={true}
            title="למה לבחור בנו? "
            content="נקיון זה לא צחוק, זה צורך זמן ומאמץ.
                    אנחנו יודעים שהנקיון והתחזוקה חשובים לכם, לכן אנו מתמקדים באיכות."
          />

        <section className={classes.Row}>
          <Image class="" img="clean3.jpg" />

          <Card
            title="נקיון ואחזקה"
            content="אנחנו מספקים שירותי נקיון ואחזקה מלאה עבור בניני מגורים, בתים פרטים ומשרדים."
            text="למידע נוסף..."
            route="/clean"
          />
        </section>

        <section className={classes.Row}>
            <Image class="" img="gardening1.jpg" />
            <Card
              title="שרותי גינון"
              content="אנחנו מספקים מגוון רחב של שירותי גינון. מכיסוח דשא, גיזום עצים ועד תחזוק שוטף של הגינה."
              text="למידע נוסף..."
              route="/garden"
            />
        </section>
      </div>
    );
  }
}

export default Home;
