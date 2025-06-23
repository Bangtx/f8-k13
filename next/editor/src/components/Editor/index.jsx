import {useEffect, useRef} from "react";

export default function ({value, setValue}) {
  const editorRef = useRef(null)
  const editorId = 'editorId'

  useEffect(() => {
    const initEditor = () => {
      try {

        // @ts-ignore
        if (window.CKEDITOR && editorRef.current) {
          // @ts-ignore
          window.CKEDITOR.env.isCompatible = true;

          // Nếu CKEditor instance đã tồn tại, destroy nó
          // @ts-ignore
          if (window.CKEDITOR.instances[editorId]) window.CKEDITOR.instances[editorId].destroy(true);

          // @ts-ignore
          const editorInstance = window.CKEDITOR.replace(editorId, {
            // extraPlugins: 'ckeditor_wiris',
            // removePlugins: 'filetools,uploadwidget,uploadfile,filebrowser,easyimage',
            height: 320
          });

          editorInstance.on('instanceReady', function () {
            editorInstance.setData(value || '');

            // Sync changes back to React state
            editorInstance.on('change', function () {
              const data = editorInstance.getData();
              setValue(data);
            });
          })

        } else {
          console.warn('CKEditor hoặc editorRef chưa sẵn sàng.');
        }
      } catch (error) {
        console.error('Lỗi khi khởi tạo CKEditor:', error);
      }
    };

    setTimeout(initEditor, 0);
  }, [])

  return (
    <>
      <textarea
        id={editorId}
        ref={editorRef}
      />
    </>
  )
}