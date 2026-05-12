from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

SOLUCIONES = {
    'reglas': {'p1': 'no', 'p2': 'originales'},
    'notas': {'p1': '50', 'p2': '40'},
    'skills': {'p1': 'moviles', 'p2': 'objetos'}
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/validar', methods=['POST'])
def validar():
    datos = request.json
    seccion = datos.get('seccion')
    respuestas = datos.get('respuestas')
    compromiso = datos.get('compromiso')

    if not compromiso:
        return jsonify({'valido': False, 'mensaje': 'Selecciona el checkbox de compromiso.'})

    correctas = SOLUCIONES.get(seccion)
    if not correctas:
        return jsonify({'valido': False, 'mensaje': 'Seccion no valida.'})

    for key, value in correctas.items():
        if respuestas.get(key) != value:
            return jsonify({'valido': False, 'mensaje': 'Respuesta incorrecta. Revisa tu respuesta.'})

    return jsonify({'valido': True})

if __name__ == '__main__':
    app.run(debug=True)