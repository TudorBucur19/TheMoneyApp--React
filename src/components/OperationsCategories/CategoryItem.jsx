import styles from './CategoryItem.module.scss';

const CategoryItem = ({ category, onClick }) => {
    const { iconContainer, iconContainer_icon, iconContainer_name } = styles;
    const { yellow, green, red, pink, lightPink, lightBlue } = styles;

    const colors = {
        yellow, 
        green, 
        red,
        pink,
        lightPink,
        lightBlue,
    }

    return ( 
        <div className={iconContainer} onClick={onClick}>
            <span className={`${iconContainer_icon} ${colors[category.color]}`}><category.icon/></span>
            <span className={iconContainer_name}>{category.name}</span>
        </div>
     );
}
 
export default CategoryItem;