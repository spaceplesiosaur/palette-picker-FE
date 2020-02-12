import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPalette } from '../util/apiCalls';
import { addColorPalette } from '../actions';
import './PaletteForm.scss';
import Project from '../Project/Project';
// import Palette from '../Palette/Palette';


const PaletteForm = ({initialPalette}) => {
    const dispatch = useDispatch();
    const [paletteName, setPaletteName] = useState('');
    const [currentProject, setCurrentProject] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const displayProjects = useSelector(state => state.projects)

    console.log('projects', displayProjects)
    const handleSubmit = async (e) => {
        e.preventDefault();
        //   if (!paletteName && !Project.name) {
            //       setErrorMsg = ('please select a project and create a new palette name')
            //   } else {
                
      const newPalette = { 
        palette_name: `${paletteName}`, 
        color_1: `#${initialPalette[0].color}`, 
        color_2: `#${initialPalette[1].color}`, 
        color_3: `#${initialPalette[2].color}`, 
        color_4: `#${initialPalette[3].color}`, 
        color_5: `#${initialPalette[4].color}`,};
        // project_id: '' };
        addPalette(newPalette)
        dispatch(addColorPalette(newPalette));
        setPaletteName('')
    // }

  }

    return(
        <>
        <form className="palette_form"> 
            <select className="palette_select">palette # 1</select>
              {displayProjects.map(project => {
                  {console.log(project.project_name)}
                  return (
                    <option className="palette_option" git sid={project.id} value={project.id}>
                        {project.project_name}
                    </option>
                  )
              })}
            <input 
                className="palette_input" 
                value={paletteName}
                placeholder="Palette Name"
                onChange={(e) => setPaletteName(e.target.value)} />
            <button
                onClick={handleSubmit}
                className="palette_btn">Submit Palette</button>
        </form>
        {/* <Palette /> */}
        </>
    )
}

export default PaletteForm;
