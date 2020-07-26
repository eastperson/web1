    class CustomTextEditor {
      constructor(props) {
        const el = document.createElement('input');
        const { maxLength } = props.columnInfo.editor.options;

        el.type = 'text';
        el.maxLength = maxLength;
        el.value = String(props.value);

        this.el = el;
      }

      getElement() {
        return this.el;
      }

      getValue() {
        return this.el.value;
      }

      mounted() {
        this.el.select();
      }
    }

    const grid = new tui.Grid({
      el: document.getElementById('grid'),
      scrollX: false,
      scrollY: false,
      columns: [
        {
          header: 'Name',
          name: 'name',
          onBeforeChange(ev) {
            console.log('Name before change:', ev);
          },
          onAfterChange(ev) {
            console.log('Name after change:', ev);
          },
          editor: 'text'
        },
        {
          header: 'Artist',
          name: 'artist',
          onBeforeChange(ev) {
            console.log('Artist before change:', ev);
          },
          onAfterChange(ev) {
            console.log('Artist after change:', ev);
          },
          editor: {
            type: CustomTextEditor,
            options: {
              maxLength: 10
            }
          }
        },
        {
          header: 'Type',
          name: 'typeCode',
          onBeforeChange(ev) {
            console.log('Type before change:' + ev);
          },
          onAfterChange(ev) {
            console.log('Type after change:' + ev);
          },
          formatter: 'listItemText',
          editor: {
            type: 'select',
            options: {
              listItems: [
                { text: 'Deluxe', value: '1' },
                { text: 'EP', value: '2' },
                { text: 'Single', value: '3' }
              ]
            }
          }
        },
        {
          header: 'Genre',
          name: 'genreCode',
          onBeforeChange(ev) {
            console.log('Genre before change', ev);
          },
          onAfterChange(ev) {
            console.log('Genre after change:', ev);
          },
          formatter: 'listItemText',
          editor: {
            type: 'checkbox',
            options: {
              listItems: [
                { text: 'Pop', value: '1' },
                { text: 'Rock', value: '2' },
                { text: 'R&B', value: '3' },
                { text: 'Electronic', value: '4' },
                { text: 'etc.', value: '5' }
              ]
            }
          },
          copyOptions: {
            useListItemText: true // when this option is used, the copy value is concatenated text
          }
        },
        {
          header: 'Grade',
          name: 'grade',
          onBeforeChange(ev) {
            console.log('Grade before change:' + ev);
          },
          onAfterChange(ev) {
            console.log('Grade after change:' + ev);
          },
          copyOptions: {
            useListItemText: true
          },
          formatter: 'listItemText',
          editor: {
            type: 'radio',
            options: {
              listItems: [
                { text: '★☆☆', value: '1' },
                { text: '★★☆', value: '2' },
                { text: '★★★', value: '3' }
              ]
            }
          }
        }
      ]
    });

    grid.resetData(gridData);