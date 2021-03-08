type ShopItemPropsType = {
    title: string
    description: string
}

export const ShopItem: React.FC<ShopItemPropsType> = ({title, description}) => {
    return <>
        <div>{title}</div>
        <div>{description}</div>
    </>
}