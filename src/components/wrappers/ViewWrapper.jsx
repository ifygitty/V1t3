const ViewWrapper = ({children, classname, ...rest}) => {
    return(
        <div className={`w-full px-[4%] lg:px-[8%] ${classname}`} {...rest}>
            {children}
        </div>
    );
}

export default ViewWrapper;