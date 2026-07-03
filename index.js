<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ady Wifi Store</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 320px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        h2 { margin-bottom: 20px; }

        .paket {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
        }

        .paket:hover { background: rgba(255, 255, 255, 0.15); }

        .btn-wa {
            display: block;
            margin-top: 20px;
            padding: 12px;
            background: #25D366;
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
        }
    </style>
</head>
<body>

    <div class="glass-card">
        <h2>WiFi Hotspot</h2>
        <p>Pilih paket internetmu:</p>
        
        <div class="paket">1 Jam - Rp 2.000</div>
        <div class="paket">3 Jam - Rp 5.000</div>
        <div class="paket">12 Jam - Rp 10.000</div>

        <a href="https://wa.me/628XXXXXXXXXX?text=Halo%20Arul,%20saya%20mau%20beli%20voucher%20WiFi" class="btn-wa">
            Pesan via WhatsApp
        </a>
    </div>

</body>
</html>
