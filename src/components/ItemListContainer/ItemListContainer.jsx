import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h1 className="greeting-title">{greeting}</h1>
            <div className="catalog-placeholder">
                <p>El catálogo de cursos se mostrará aquí próximamente.</p>
                <div className="skeleton-grid">
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
