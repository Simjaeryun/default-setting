module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'develop-rule': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'develop-rule': ({ subject }) => {
                    const commitFolders = ['[front]', '[back]', '[domain]', '[root]'];
                    return [
                        commitFolders.some(folder => subject?.startsWith(folder) !== subject?.endsWith(folder)),
                        `\n${commitFolders.map(folder => `${folder}, `).join('')}
            ################
            위 네 가지 중 한 가지는 반드시 콜론(:) 뒤에 포함되어야 합니다.
            [name] 뒤에 메시지 입력은 필수입니다.
            
            # <타입>: [name] <제목> 의 형식으로 제목을 아래 공백줄에 작성
            # 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지
            
            # 예) feat: [back] 로그인 기능 추가
            
            # 바로 아래 공백은 지우지 마세요 (제목과 본문의 분리를 위함)
            
            ################
            # 본문(구체적인 내용)을 아랫줄에 작성
            # 여러 줄의 메시지를 작성할 땐 "-"로 구분 (한 줄은 72자 이내)
            
            ################
            # 꼬릿말(footer)을 아랫줄에 작성 (현재 커밋과 관련된 이슈 번호 추가 등)
            # 예) Close #7
            
            ################
            #build		: 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, gulp, yarn 레벨)
            #ci				: ci구성파일 및 스크립트 변경
            #chore		: 패키지 매니저 설정할 경우, 코드 수정 없이 설정을 변경
            #docs			: documentation 변경
            #feat			: 새로운 기능
            #fix			: 버그 수정
            #perf			: 성능 개선
            #refactor	: 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링
            #style		: 코드 의미에 영향을 주지 않는 변경사항 ( white space, formatting, colons )
            #test			: 누락된 테스트 추가 또는 기존 테스트 수정
            #revert		: 작업 되돌리기
            ################
            `,
                    ];
                },
            },
        },
    ],
};
