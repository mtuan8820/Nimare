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
        return <div className="countdown">
            <div className={clsx(styles.countdownClock, "row row--no-gutters")}>
                <div className={clsx(styles.block,"col")}>
                    <div className={clsx(styles.number)}>{String(days).padStart(3,'0')}</div>
                    <div>DAYS</div>
                </div>
                <div className={clsx(styles.block,"col")}>
                    <div className={clsx(styles.number)}>{String(hours).padStart(2,'0')}</div>
                    <div>HOURS</div>
                </div>
                <div className={clsx(styles.block,"col")}>
                    <div className={clsx(styles.number)}>{String(minutes).padStart(2,'0')}</div>
                    <div>MINUTES</div>
                </div>
                <div className={clsx(styles.block,"col")}>
                    <div className={clsx(styles.number)}>{String(seconds).padStart(2,'0')}</div>
                    <div>SECONDS</div>
                </div>
            </div>
        </div>

    }
}

export default function CountdownCard():ReactNode{
    const {siteConfig} = useDocusaurusContext();
    const jlptDate = siteConfig.customFields.upcomingJLPT.toString();
    const date = new Date(jlptDate);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    return(
        <div className={clsx(styles.container)}>
            <div className="col col--4">
                <p className={clsx(styles.title)}>
                    <span>日本語能力試験 -</span> JLPT IS UPCOMING
                </p>
                <h3>{formattedDate}</h3>

                <div className="">
                    <Countdown
                        renderer={renderer}
                        date={jlptDate}/>
                </div>
            </div>
        </div>
    );
}