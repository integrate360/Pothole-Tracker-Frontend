// src/pages/MapView.jsx
import Header from '../components/Header';

const MapView = () => {
  return (
    <>
      <Header />
      <div className="page-container map-view-container">
        <div className="map-filters">
            <h4>Conditions</h4>
            <div className="filter-group">
                <h5>FILTER BY SEGMENTS</h5>
                <div><input type="checkbox" id="all" /> <label htmlFor="all">All</label></div>
                <div><input type="checkbox" id="poor" /> <label htmlFor="poor">Poor</label></div>
                <div><input type="checkbox" id="fair" /> <label htmlFor="fair">Fair</label></div>
                <div><input type="checkbox" id="good" defaultChecked /> <label htmlFor="good">Good</label></div>
            </div>
             <div className="filter-group">
                <h5>FILTER BY DEFECT TYPE</h5>
                <div><input type="checkbox" id="allDefects" /> <label htmlFor="allDefects">All Defect Types</label></div>
                <div><input type="checkbox" id="cracks" /> <label htmlFor="cracks">Cracks</label></div>
             </div>
        </div>
        <div className="map-display">
            {/* This is a static representation */}
        </div>
      </div>
    </>
  );
};

export default MapView;