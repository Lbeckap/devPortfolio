import styles from './Tile.module.css';
import data from './projectsData.jsx';

function setTagColor(tag) {
  if (tag === 'css') {
    return styles.inlineColorTags_css;
  } else if (tag === 'js') {
    return styles.inlineColorTags_js;
  } else if (tag === 'html') {
    return styles.inlineColorTags_html;
  } else if (tag === 'react') {
    return styles.inlineColorTags_react;
  } else if (tag === 'java') {
    return styles.inlineColorTags_java;
  } else {
    return styles.inlineColorTags_other;
  }
}

//TODO Change container color based on if filtering by a tag. Make it a gradient with each tag.

export default function Tile() {
  return (
    <>
      <div className={styles.container}>
        {data.map((project, id) => (
          <div className={styles.flipBox} key={id}>
            <div className={styles.flipInner}>
              <div className={`${styles.tile} ${styles.flipFront}`}>
                <img src={project.img} className={styles.tileImg}></img>
                <div className={styles.tagBar}>
                  {project.tags.map((tag) => (
                    <div
                      className={`${styles.inlineColorTags} ${setTagColor(
                        tag
                      )}`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className={`${styles.onFlip} ${styles.flipBack}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url}>View source code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
