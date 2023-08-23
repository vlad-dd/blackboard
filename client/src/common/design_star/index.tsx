interface IDesignStar { 
    color: string
 }

const DesignStar = ({ color }: IDesignStar) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="39" viewBox="0 0 59 59" fill="none">
            <path d="M0 29.5L18.8686 24.3802L11.107 6.43597L26.8743 17.9958L36.0644 0.739624L36.8572 20.2744L56.0786 16.7004L41.3 29.5L56.0786 42.2996L36.8572 38.7256L36.0644 58.2604L26.8743 41.0042L11.107 52.564L18.8686 34.6198L0 29.5Z" fill={color} />
        </svg>
    )
}

export default DesignStar;