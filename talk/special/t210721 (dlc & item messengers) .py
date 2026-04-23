# -*- coding: utf-8 -*-
def t210721_1():
    """State 0,1"""
    while True:
        if GetEventStatus(6717) == 1 and GetEventStatus(6718) == 1 and GetEventStatus(6723) == 1:
            break
        else:
            assert t210721_x11()
            break
    """State 2"""
    assert GetEventFlag(12105034)
    t210721_x12()
    Quit()

def t210721_x0():
    """State 0,1"""
    assert t210721_x1(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t210721_x1(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen():
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) or CheckSpecificPersonMenuIsOpen(z2, 0) or CheckSpecificPersonMenuIsOpen(z3,
        0) or CheckSpecificPersonMenuIsOpen(z4, 0)):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210721_x2(actionbutton3=6025, flag1=12105054, flag2=12105058, flag6=6001, flag7=6001, flag8=6001, flag9=6001,
               flag10=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not IsPlayerDead()
                and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventFlag(flag1) or GetEventFlag(flag2) or GetEventFlag(flag6) or GetEventFlag(flag7) or GetEventFlag(flag8)
                or GetEventFlag(flag9) or GetEventFlag(flag10))
        """State 2"""
        if (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag6) and not GetEventFlag(flag7)
            and not GetEventFlag(flag8) and not GetEventFlag(flag9) and not GetEventFlag(flag10)):
            pass
        elif CheckActionButtonArea(actionbutton3):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not
              IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    SetTalkTime(0.5)
    return 0

def t210721_x3(flag4=_, flag5=_, action1=10010715):
    """State 0,3"""
    DebugEvent('フラグ判定')
    if not GetEventFlag(flag4 * 10 + 70000000 + flag5 * 1):
        """State 1"""
        SetEventFlag(flag4 * 10 + 72100000 + flag5 * 1, FlagState.On)
        """State 4"""
        return 0
    else:
        """State 2"""
        # action:10010715:"*"
        OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, action1, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        """State 5"""
        return 1

def t210721_x4(actionbutton1=6140, actionbutton2=6133, flag3=12105034):
    """State 0"""
    while Loop('mainloop'):
        """State 1"""
        Label('L0')
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not IsPlayerDead()
                and not IsCharacterDisabled())
        while True:
            """State 2"""
            Label('L1')
            if CheckActionButtonArea(actionbutton1):
                """State 4"""
                Label('L2')
                SetTalkTime(0.5)
                return 0
            elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
                  not IsPlayerDead() and not IsCharacterDisabled())):
                Continue('mainloop')
            elif not GetEventFlag(flag3):
                Break('mainloop')
    """State 3"""
    if GetEventFlag(flag3):
        Goto('L1')
    elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not IsPlayerDead()
          and not IsCharacterDisabled())):
        Goto('L0')
    elif CheckActionButtonArea(actionbutton2):
        Goto('L2')

def t210721_x5(flag1=12105054, flag2=12105058):
    """State 0,1"""
    while True:
        """State 5"""
        call = t210721_x2(actionbutton3=6025, flag1=flag1, flag2=flag2, flag6=6001, flag7=6001, flag8=6001, flag9=6001,
                          flag10=6001)
        if call.Done() and GetEventFlag(flag1):
            """State 2"""
            call = t210721_x7()
            if call.Done():
                pass
            elif IsPlayerDead():
                break
            elif GetDistanceToPlayer() > 3:
                """State 4"""
                Label('L0')
                call = t210721_x9()
                if call.Done():
                    pass
                elif IsPlayerDead():
                    break
        elif call.Done() and GetEventFlag(flag2):
            """State 6"""
            call = t210721_x10()
            if call.Done() and GetEventStatus(12105034) == 1:
                return 1
            elif GetDistanceToPlayer() > 3:
                Goto('L0')
            elif IsPlayerDead():
                break
        elif IsPlayerDead():
            break
    """State 3"""
    t210721_x8()
    Quit()
    """Unused"""
    """State 7"""
    return 0

def t210721_x6():
    """State 0,1"""
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210721_x7():
    """State 0"""
    if GetEventFlag(6717):
        pass
    else:
        """State 2"""
        # action:10011270:"Consume Insight and ring the Beckoning Bell\nto enlist the cooperation of hunters from\nother worlds."
        OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, 10011270, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        """State 3"""
        SetEventFlag(6717, FlagState.On)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 4,5"""
    if GetEventFlag(6718):
        pass
    else:
        """State 6"""
        # action:10011280:"Silencing Blank ends such forms of cooperation."
        OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, 10011280, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        """State 7"""
        SetEventFlag(6718, FlagState.On)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 1"""
    SetEventFlag(12101025, FlagState.On)
    assert not IsMenuOpen(MenuType.Bonfire)
    """State 8"""
    return 0

def t210721_x8():
    """State 0,1"""
    ForceCloseMenu()
    CloseShopMessage()
    ForceCloseGenericDialog()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t210721_x9():
    """State 0,1"""
    assert t210721_x1(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t210721_x10():
    """State 0"""
    if True:
        """State 2"""
        # action:10011410:"The Eye of a Blood-drunk Hunter beckons hunters to the Hunter's Nightmare. A deformed creature will whisk you away outside Oedon Chapel."
        OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, 10011410, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        """State 3"""
        SetEventFlag(6723, FlagState.On)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    elif GetEventFlag(6723):
        pass
    """State 1"""
    SetEventFlag(12101029, FlagState.On)
    assert not IsMenuOpen(MenuType.Bonfire)
    """State 4"""
    return 0

def t210721_x11():
    """State 0"""
    while True:
        """State 1"""
        call = t210721_x5(flag1=12105054, flag2=12105058)
        if call.Get() == 1:
            return 1
        elif call.Done():
            pass
        assert IsClientPlayer()
        """State 2"""
        call = t210721_x6()
        assert not IsClientPlayer()
    """Unused"""
    """State 3"""
    return 0

def t210721_x12():
    """State 0"""
    while True:
        """State 2"""
        call = t210721_x14()
        assert IsMultiplayerInProgress()
        """State 1"""
        call = t210721_x13()
        assert not IsMultiplayerInProgress()
    """Unused"""
    """State 3"""
    return 0

def t210721_x13():
    """State 0,1"""
    return 0

def t210721_x14():
    """State 0"""
    while True:
        """State 1"""
        DebugEvent('待機')
        """State 5"""
        assert t210721_x4(actionbutton1=6140, actionbutton2=6133, flag3=12105034)
        """State 2"""
        ClearPlayerDamageInfo()
        """State 4"""
        call = t210721_x15()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked():
            """State 3"""
            assert t210721_x0()
    """Unused"""
    """State 6"""
    return 0

def t210721_x15():
    """State 0,6"""
    DebugEvent('起動済みのワープ椅子が存在するかを判定1')
    if GetEventFlag(12105034):
        """State 7"""
        DebugEvent('起動済みワープ椅子が存在する')
        if GetEventFlag(6707):
            pass
        else:
            """State 9"""
            # action:10011110:"Awaken at a selected location in Yharnam."
            OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, 10011110, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                              1)
            """State 10"""
            SetEventFlag(6707, FlagState.On)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        while True:
            """State 1"""
            Label('L0')
            ClearTalkListData()
            """State 4"""
            # action:70003400:"Hunter's Nightmare"
            AddTalkListData(9, 70000000 + 340 * 10 + 0, 10000000 + 340 * 10000 + 7810 + 20 * 0)
            # action:70003401:"Nightmare Church"
            AddTalkListData(10, 70000000 + 340 * 10 + 1, 10000000 + 340 * 10000 + 7810 + 20 * 1)
            # action:70003402:"Underground Corpse Pile"
            AddTalkListData(11, 70000000 + 340 * 10 + 2, 10000000 + 340 * 10000 + 7810 + 20 * 2)
            # action:70003403:"Nightmare Grand Cathedral"
            AddTalkListData(12, 70000000 + 340 * 10 + 3, 10000000 + 340 * 10000 + 7810 + 20 * 3)
            # action:70003500:"Research Hall"
            AddTalkListData(13, 70000000 + 350 * 10 + 0, 10000000 + 350 * 10000 + 7810 + 20 * 0)
            # action:70003501:"Lumenwood Garden"
            AddTalkListData(14, 70000000 + 350 * 10 + 1, 10000000 + 350 * 10000 + 7810 + 20 * 1)
            # action:70003502:"Astral Clocktower"
            AddTalkListData(15, 70000000 + 350 * 10 + 2, 10000000 + 350 * 10000 + 7810 + 20 * 2)
            # action:70003600:"Fishing Hamlet"
            AddTalkListData(16, 70000000 + 360 * 10 + 0, 10000000 + 360 * 10000 + 7810 + 20 * 0)
            # action:70003601:"Lighthouse Hut"
            AddTalkListData(17, 70000000 + 360 * 10 + 1, 10000000 + 360 * 10000 + 7810 + 20 * 1)
            # action:70003602:"Coast"
            AddTalkListData(18, 70000000 + 360 * 10 + 2, 10000000 + 360 * 10000 + 7810 + 20 * 2)
            """State 2"""
            StartWarpMenuInit()
            def WhilePaused():
                SetTalkTime(0.33)
            if GetTalkListEntryResult() == 0 or not CheckSpecificPersonMenuIsOpen(100, 0):
                """State 3"""
                break
            elif GetTalkListEntryResult() == 9:
                """State 19"""
                # action:10010715:"*"
                call = t210721_x3(flag4=340, flag5=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 10:
                """State 20"""
                # action:10010715:"*"
                call = t210721_x3(flag4=340, flag5=1, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 13:
                """State 21"""
                # action:10010715:"*"
                call = t210721_x3(flag4=350, flag5=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 14:
                """State 22"""
                # action:10010715:"*"
                call = t210721_x3(flag4=350, flag5=1, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 15:
                """State 28"""
                # action:10010715:"*"
                assert t210721_x3(flag4=350, flag5=2, action1=10010715)
                break
            elif GetTalkListEntryResult() == 16:
                """State 23"""
                # action:10010715:"*"
                call = t210721_x3(flag4=360, flag5=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 17:
                """State 24"""
                # action:10010715:"*"
                call = t210721_x3(flag4=360, flag5=1, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 11:
                """State 25"""
                # action:10010715:"*"
                call = t210721_x3(flag4=340, flag5=2, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 12:
                """State 26"""
                # action:10010715:"*"
                call = t210721_x3(flag4=340, flag5=3, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done() or call.Done():
                    break
            elif GetTalkListEntryResult() == 18:
                """State 27"""
                # action:10010715:"*"
                call = t210721_x3(flag4=360, flag5=2, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
    else:
        """State 8"""
        DebugEvent('起動済みワープ椅子が存在しない')
        """State 5"""
        # action:10011100:"No place to awaken."
        OpenGenericDialog(DialogBoxType.CenterBottom1, 10011100, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 29"""
    Label('L1')
    return 0
    """Unused"""
    """State 11"""
    # action:10010715:"*"
    call = t210721_x3(flag4=320, flag5=1, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done():
        Goto('L1')
    """State 12"""
    # action:10010715:"*"
    call = t210721_x3(flag4=320, flag5=3, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done() or call.Done():
        Goto('L1')
    """State 13"""
    # action:10010715:"*"
    call = t210721_x3(flag4=330, flag5=0, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done():
        Goto('L1')
    """State 14"""
    # action:10010715:"*"
    call = t210721_x3(flag4=330, flag5=1, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done():
        Goto('L1')
    """State 15"""
    # action:10010715:"*"
    call = t210721_x3(flag4=260, flag5=0, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done():
        Goto('L1')
    """State 16"""
    # action:10010715:"*"
    call = t210721_x3(flag4=260, flag5=2, action1=10010715)
    if call.Get() == 1:
        Goto('L0')
    elif call.Done():
        Goto('L1')
    """State 17"""
    # action:10010715:"*"
    call = t210721_x3(flag4=260, flag5=1, action1=10010715)
    if call.Done():
        Goto('L1')
    elif call.Get() == 1:
        Goto('L0')
    """State 18"""
    # action:10010715:"*"
    call = t210721_x3(flag4=260, flag5=3, action1=10010715)
    if call.Done():
        Goto('L1')
    elif call.Get() == 1:
        Goto('L0')

