String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};


String.prototype.cleanTaxId = function(){
    var target = this;
    return target.replaceAll('.','').replaceAll('/', '').replaceAll('-', '')
};
