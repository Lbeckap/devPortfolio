import styles from './FilterBar.module.css';
import data from './projectsData';

export default function FilterBar({projectList, setProjectList}) {

    const tagOptionsTest = ['css', 'html', 'java', 'vanilla js', 'react']
    // create filter options by traversing data and using project.tags that has the longest length(MAYBE?) - later - use test data for now

    function handleClick() {
        // open drop down to allow user to click option 
        // update state based on option selected
        let update = projectList.slice(0,3)
        setProjectList(update);
    }

    function handleClickClear() {
        setProjectList(data);
    }



    return(
        <>  <div className={styles.container}>
            <p onClick={handleClick}>Filter Icon</p>
            <p onClick={handleClickClear}>Clear</p>
            </div>
        </>
    );
}