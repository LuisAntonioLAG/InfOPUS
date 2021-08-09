import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';


import { faFolder, faFolderOpen, faFilePdf, faDownload, faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },

});

const ArvoreArquivos = (props) => {
    const {
        data = {},
    } = props;

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
      };

    const [expanded, setExpanded] = React.useState(['root']);
    const preventDefault = (event) => event.preventDefault();

    const icons = (nodes) => (
        <>
        {nodes.format === 'folder' && 
            <>
            { expanded.includes(nodes.id) ?
            (<FontAwesomeIcon icon={faFolderOpen}/>) :
            (<FontAwesomeIcon icon={faFolder}/>) 
            }
            </>
            }
            
        {nodes.format === 'pdf' && <FontAwesomeIcon icon={faFilePdf}/>}
        </>
    )

    const handleDownload = () => {
        const link = document.createElement("a");
        link.download = `rwqerqwer.download`;
        link.href = `rwerqwerq`;
        link.click();
        console.log('download')
      };

    const Actions = () => {

        return (

        <div style={{background:'red'}}>
        <IconButton size='small' >
        <FontAwesomeIcon icon={faLink}/>
        </IconButton>
        <IconButton onClick={handleDownload}  color='secondary' size='small' >
        <FontAwesomeIcon  icon={faDownload}/>
        </IconButton>
        </div>
        )
    }


  const classes = useStyles();

  const renderTree = (nodes) => (
    <>
    
    <TreeItem key={nodes.id} nodeId={nodes.id} icon={icons(nodes)} label={<div style={{display:'flex'}}>{nodes.name}  </div>} >
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
    </>
  );

  return (
    <TreeView
      className={classes.root}
      expanded={expanded}
      onNodeToggle={handleToggle}
      multiSelect
    >
      {renderTree(data)}
      
    </TreeView>
  );
}

export default ArvoreArquivos