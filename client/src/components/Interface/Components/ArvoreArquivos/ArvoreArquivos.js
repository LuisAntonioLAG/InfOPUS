import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import {
  faExternalLinkAlt,
  faFolder,
  faFolderOpen,
  faFilePdf, faFileWord, faFileExcel, faFilePowerpoint, faFileArchive, faFileImage, faFileVideo, faFileAudio,
  faDownload,
  faLink
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Box, IconButton, Typography } from "@material-ui/core";

import { useStyles } from "./ArvoreArquivos.styles.js";

const ArvoreArquivos = (props) => {
  const { data = {} } = props;

  const classes = useStyles();

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const [expanded, setExpanded] = React.useState(['root']);

  const icons = (nodes) => (
    <>
      {nodes.format === "folder" && (
        <>
          {expanded.includes(nodes.id) ? (
            <FontAwesomeIcon
              className={classes.folderIcon}
              icon={faFolderOpen}
            />
          ) : (
            <FontAwesomeIcon className={classes.folderIcon} icon={faFolder} />
          )}
        </>
      )}

      {nodes.format === "zip" && (
        <FontAwesomeIcon className={classes.zipIcon} icon={faFileArchive} />
      )}
      {nodes.format === "pdf" && (
        <FontAwesomeIcon className={classes.pdfIcon} icon={faFilePdf} />
      )}
      {nodes.format === "word" && (
        <FontAwesomeIcon className={classes.wordIcon} icon={faFileWord} />
      )}
      {nodes.format === "excel" && (
        <FontAwesomeIcon className={classes.excelIcon} icon={faFileExcel} />
      )}
      {nodes.format === "ppt" && (
        <FontAwesomeIcon className={classes.pptIcon} icon={faFilePowerpoint} />
      )}
      {nodes.format === "imagem" && (
        <FontAwesomeIcon className={classes.imageIcon} icon={faFileImage} />
      )}
      {nodes.format === "audio" && (
        <FontAwesomeIcon className={classes.audioIcon} icon={faFileAudio} />
      )}
      {nodes.format === "video" && (
        <FontAwesomeIcon className={classes.videoIcon} icon={faFileVideo} />
      )}
    </>
  );

  const Label = (props) => {
    const { nodes = [] } = props;

    const handleViewClick = () => {
      window.open(
        `https://drive.google.com/file/d/${nodes.driveId}/view`,
        "_blank",
        "noreferrer noopener"
      );
    };

    const handleDownloadClick = () => {
      const link = document.createElement("a");
      link.download = `${nodes.name}.download`;
      link.href = `https://drive.google.com/uc?export=download&id=${nodes.driveId}`;
      link.click();
    };

    const handleAcessClick = () => {
      window.open(
        `${nodes.acess}`,
        "_blank",
        "noreferrer noopener"
      );
    }

    return (
      <>
        <div>
          <div>
            <Typography style={{ width: "45vw" }} noWrap variant="body1">
              {nodes.name}
            </Typography>
          </div>
          {!Array.isArray(nodes.children) && (
            <div>
              {nodes.Download !== false &&
                <IconButton
                  onClick={handleDownloadClick}
                  color="secondary"
                  size="small"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </IconButton>
              }

              {nodes.View !== false &&
              <IconButton color="primary" onClick={handleViewClick} size="small">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </IconButton>
              }

              {nodes.acess &&
              <IconButton
                onClick={handleAcessClick}
                size="small"
              >
                <FontAwesomeIcon icon={faLink} />
              </IconButton>
              }

            </div>
          )}
        </div>
      </>
    );
  };

  const renderTree = (nodes) => (
    <>
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        icon={
          <Typography align="center" variant="subtitle1" color="textSecondary">
            {icons(nodes)}
          </Typography>
        }
        label={<Label nodes={nodes} />}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    </>
  );

  return (
    <TreeView
      className={classes.root}
      expanded={expanded}
      onNodeToggle={handleToggle}
      disableSelection
    >
      {renderTree(data)}
    </TreeView>
  );
};

export default ArvoreArquivos;
