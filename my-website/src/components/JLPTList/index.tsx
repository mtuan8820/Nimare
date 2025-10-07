import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css"
export default function JLPTList() {
    return (
        <div className={clsx(styles.container)}>
            <p className={clsx(styles.subtitle)}>Grammar</p>
            <h2 className={clsx(styles.title)}>JLPT levels</h2>

            <div className={clsx(styles.list,'before-pattern')}>
                  {[
                        { level: "N5", desc: "Understand basic sentences and everyday vocabulary.", tag: "Beginner" },
                        { level: "N4", desc: "Understand simple texts and communicate in familiar situations.", tag: "Beginner-Intermediate" },
                        { level: "N3", desc: "Grasp the main points of everyday conversations and texts.", tag: "Intermediate" },
                        { level: "N2", desc: "Understand complex texts and advanced grammar.", tag: "Advanced" },
                        { level: "N1", desc: "Understand academic texts, news, abstract discussions.", tag: "Expert" },
                    ].map((l) => (
                        <Link key={l.level} className={clsx('col')}>
                            <h3>{l.level}</h3>
                            <p className={clsx('desc')}>{l.desc}</p>
                            <span className="tag">{l.tag}</span>
                        </Link>
                    ))}      
            </div>
        </div>
    )
}