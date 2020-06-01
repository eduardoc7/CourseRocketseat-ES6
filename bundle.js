"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// SPREAD
// spread, escrito com reticências ..., permite distribuir o conteúdo de 
// qualquer objeto iterável em múltiplos elementos.
var arr1 = [5, 2, 1];
var arr2 = [3, 4, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // alterando o conteudo de um objeto

var usuarios = {
  nome: 'Eduardo',
  idade: 20
};
console.log(usuarios); // '...usuarios', irá copiar todo o objeto de usuarios
// e após isso sobrepondo a propriedade do objetivo que queremos mudar
// ja que um objeto nao pode ter duas propriedades iguais 

var teste = _objectSpread(_objectSpread({}, usuarios), {}, {
  nome: 'TESTING',
  idade: 45
});

console.log(teste); // REST
// o resto é uma variável do operador spread, também escrito em reticências
// faz o oposto que o spread
// irá nos retornar o resto das propriedades

var usuario = {
  nome: 'Eduardo',
  idade: 20,
  cidade: 'Curitiba'
}; // pegamos apenas o conteudo de nome e o resto jogamos dentro da variável resto

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto); // usando o rest em arrays com a desestruturação

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); // usando o rest em funções
// uma função com multiplos parametros 

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(4, 5, 6, 8));
