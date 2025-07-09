import type {ReactNode} from 'react';
import Countdown, { CountdownRenderProps} from "react-countdown";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import styles from './styles.module.css';

const renderer =  (props: CountdownRenderProps) =>{
    const { days, hours, minutes, seconds, completed } = props;
    if (completed){
        return <div>"Completed"</div>
    }
    else{
        return <div className="container">
            <div className="row">
                <span className="col col--5 text--bold">BEGINS IN:</span>
            </div>
            <div className={clsx(styles.countdownClock, "row row--no-gutters")}>

                <div className={clsx(styles.number,"text--primary col col--1")}>{days}</div>
                <div className={clsx(styles.textNumber, "col--1")}>DAYS</div>

                <div className={clsx(styles.number,"text--primary col col--1")}>{String(hours).padStart(2, '0')}</div>
                <div className={clsx(styles.textNumber, "col--1")}>HOURS</div>

                <div className={clsx(styles.number,"text--primary col col--1")}>{String(minutes).padStart(2,'0')}</div>
                <div className={clsx(styles.textNumber, "col col--1")}>MINUTES</div>

                <div className="col col--6"></div>
            </div>
        </div>
    }
}

export default function CountdownCard():ReactNode{
    const {siteConfig} = useDocusaurusContext();
    return(
      <div className={clsx(styles.container,"container")}>
          <div className="row row--no-gutters">
              <div className={clsx(styles.jlptBanner, "col col--5")}>

              </div>
              <div className="col col--7">

                  <div className={clsx(styles.countdown)}>
                      <Countdown
                          date={siteConfig.customFields.upcomingJLPT.toString()}
                          renderer={renderer}/>
                  </div>
              </div>

          </div>

      </div>
    );
}