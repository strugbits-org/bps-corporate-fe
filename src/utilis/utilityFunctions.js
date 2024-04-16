import parse from 'html-react-parser';

export const convertToHTML = ({ content = "", class_p = "", class_ul = "", data_aos_p = ""}) => {
    if (typeof content === 'string') return content;
    let html = "";

    content.nodes.forEach(node => {
      if (node.type === 'PARAGRAPH') {
        if (node.nodes.length > 0) {
          html += `<p class="${class_p}" data-aos="${data_aos_p}">`;

          node.nodes.forEach(textNode => {
            if (textNode.type === 'TEXT') {
              let decorationsHTML = "";

              if (textNode.textData.decorations) {
                textNode.textData.decorations.forEach(decoration => {
                  if (decoration.type === 'BOLD') {
                    decorationsHTML += '<strong>';
                  } else if (decoration.type === 'ITALIC') {
                    decorationsHTML += '<em>';
                  }
                });
              }

              html += decorationsHTML + textNode.textData.text;

              if (decorationsHTML !== "") {
                decorationsHTML.split('').reverse().forEach(char => {
                  if (char === '>') {
                    html += '</' + decorationsHTML.substring(decorationsHTML.lastIndexOf('<') + 1);
                    decorationsHTML = decorationsHTML.substring(0, decorationsHTML.lastIndexOf('<'));
                  }
                });
              }
            }
          });

          html += '</p>';
        } else {
          html += '<br/>';
        }
      } else if (node.type === 'BULLETED_LIST') {
        html += `<ul class="${class_ul}" >`;

        node.nodes.forEach(listItem => {
          html += '<li>';

          listItem.nodes.forEach(paragraph => {
            paragraph.nodes.forEach(textNode => {
              if (textNode.type === 'TEXT') {
                let decorationsHTML = "";

                if (textNode.textData.decorations) {
                  textNode.textData.decorations.forEach(decoration => {
                    if (decoration.type === 'BOLD') {
                      decorationsHTML += '<strong>';
                    } else if (decoration.type === 'ITALIC') {
                      decorationsHTML += '<em>';
                    }
                  });
                }

                html += decorationsHTML + textNode.textData.text;

                if (decorationsHTML !== "") {
                  decorationsHTML.split('').reverse().forEach(char => {
                    if (char === '>') {
                      html += '</' + decorationsHTML.substring(decorationsHTML.lastIndexOf('<') + 1);
                      decorationsHTML = decorationsHTML.substring(0, decorationsHTML.lastIndexOf('<'));
                    }
                  });
                }
              }
            });
          });

          html += '</li>';
        });

        html += '</ul>';
      }
    });

    return parse(html);
  }