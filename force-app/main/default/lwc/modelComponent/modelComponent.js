import { LightningElement, track } from 'lwc';

export default class ModelComponent extends LightningElement {
    @track selectedStep = 'step1';
    @track connectionDetails = '';
    @track migratingDetails = '';
    @track isShowModal = false;

    step1 = true;
    step2 = false;
    step3 = false;
    
    serviceOptions = [
        { label: 'Broadband only', value: 'broadband' },
        { label: 'Broadband and access line', value: 'accessLineCombo' },
    ];

    serviceSelected='';

    get isSelectedStep3(){
        return this.selectedStep === "step3";
    }

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    handleStepBlur(event) {
        const stepIndex = event.detail.index;
    }

    handleConnectionDetailsChange(event) {
        this.connectionDetails = event.target.value;
    }

    handleMigratingDetailsChange(event) {
        this.migratingDetails = event.target.value;
    }

    nextStep(){
        var moveToNextStep = this.selectedStep;
        if(this.selectedStep =='step2'){
            this.selectedStep = 'step3';
            this.step3 = true;
            this.step1 = false;
            this.step2 = false;
        }else if(this.selectedStep == 'step1'){
            this.selectedStep = 'step2';
            this.step2 = true;
            this.step3 = false;
            this.step1 = false;
        }else{
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
        }
    }

    prevStep(){
        var moveToPrevStep = this.selectedStep;
        if(this.selectedStep == 'step2'){
            this.selectedStep = 'step1';
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
        }else if(this.selectedStep == 'step3'){
            this.selectedStep = 'step2';
            this.step2 = true;
            this.step3 = false;
            this.step1 = false;
        }else{
            this.step3 = true;
            this.step1 = false;
            this.step2 = false;
        }
    }

    handleFinish() {
        this.isShowModal = false;
        this.selectedStep = 'Step1';
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }

    selectedStep1(){
        this.selectedStep = 'step1';
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }

    selectedStep2(){
        this.selectedStep = 'step2';
        this.step2 = true;
        this.step3 = false;
        this.step1 = false;
    }

    selectedStep3(){
        this.selectedStep = 'step3';
        this.step3 = true;
        this.step1 = false;
        this.step2 = false;
    }

}