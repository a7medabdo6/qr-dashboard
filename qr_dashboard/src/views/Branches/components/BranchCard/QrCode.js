import React from 'react';
import { Box, Modal, CircularProgress, Button } from '@material-ui/core';
import { QRCode } from 'react-qrcode-logo';
import scanMe from '../../../../assets/images/cam.png';

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #eee',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  // width: '40%',

  textAlign: 'center',
  maxHeight: '80vh',
  overflow: 'auto'
};

function QrCode({ title, qrCode, handleCloseModal, openQRModal }) {
  const downloadCode = () => {
    const canvas = document.getElementById('QR');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${title}-QR.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  return (
    <Modal open={openQRModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        {qrCode ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <QRCode
              value={qrCode}
              size={350}
              logoImage={scanMe}
              removeQrCodeBehindLogo={true}
              logoHeight={40}
              logoWidth={40}
              logoOpacity={1}
              enableCORS={true}
              qrStyle="dots"
              eyeRadius={10}
              eyeColor={[
                {
                  inner: '#000000',
                  outer: '#999999'
                },
                {
                  inner: '#000000',
                  outer: '#999999'
                },
                {
                  inner: '#000000',
                  outer: '#999999'
                }
              ]}
              id={'QR'}
            />
            <Button
              onClick={() => downloadCode()}
              color="secondary"
              size="large"
              variant="contained">
              Download QR Code
            </Button>
          </div>
        ) : (
          <CircularProgress color="primary" />
        )}
      </Box>
    </Modal>
  );
}

export default QrCode;
